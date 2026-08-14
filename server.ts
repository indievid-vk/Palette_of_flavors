import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI, Type } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize Gemini AI Client
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  }) : null;

  // API Route: AI Trio Recipe Generator
  app.post('/api/ai/trio', async (req, res) => {
    try {
      const { baseIngredient, dessertType } = req.body;

      if (!baseIngredient) {
        return res.status(400).json({ error: 'baseIngredient is required' });
      }

      if (!ai) {
        // Fallback response when no API key is available
        return res.json({
          trio: {
            title: `Гармония: ${baseIngredient} Трио`,
            flavors: [baseIngredient, 'Лимон', 'Миндаль'],
            categories: ['Базовый', 'Акцентная кислинка', 'Ореховая сливочность'],
            dessertType: dessertType || 'муссовый торт',
            concept: `Баланс насыщенного вкуса ${baseIngredient} с освежающим цитрусовым акцентом и хрустящей миндальной базой.`,
            layers: [
              {
                layer: 'Верхний декор / Соус',
                flavorRole: 'Лимонный курд',
                description: 'Создает яркую стартовую кислинку на языке.'
              },
              {
                layer: 'Основное тело / Мусс',
                flavorRole: baseIngredient,
                description: 'Главный вкусовой мотив десерта.'
              },
              {
                layer: 'Нижний слой / Бисквит',
                flavorRole: 'Миндальный дакуаз',
                description: 'Благородная ореховая текстура.'
              }
            ],
            intensity: 4,
            risk: 2,
            chefNotes: 'Сохраняйте темперирование шоколадных элементом при 29-31°C для идеального глянца.'
          }
        });
      }

      const prompt = `Ты — шеф-кондитер мишленовского уровня. Сформируй авторское гармоничное трио вкусов для кондитерского изделия "${dessertType || 'муссовый торт'}" на основе ключевого ингредиента "${baseIngredient}".
Верни результат строго в формате JSON со следующими полями:
- title: Название трио-концепта
- flavors: Массив из 3 строк [Базовый ингредиент, Второй ингредиент, Третий ингредиент]
- categories: Массив из 3 описательных ролей для каждого вкуса
- dessertType: Формат изделия
- concept: Описание концепта в 1-2 предложениях
- layers: Массив из 3 объектов { layer: название слоя, flavorRole: роль вкуса, description: техническое описание роли слоя }
- intensity: Число от 1 до 5
- risk: Число от 1 до 5
- chefNotes: Профессиональный совет шефа по балансу текстур или сахара`;

      const response = await ai.models.generateContent({
        model: 'gemini-3.6-flash',
        contents: prompt,
        config: {
          responseMimeType: 'application/json',
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              flavors: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              categories: {
                type: Type.ARRAY,
                items: { type: Type.STRING }
              },
              dessertType: { type: Type.STRING },
              concept: { type: Type.STRING },
              layers: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    layer: { type: Type.STRING },
                    flavorRole: { type: Type.STRING },
                    description: { type: Type.STRING }
                  },
                  required: ['layer', 'flavorRole', 'description']
                }
              },
              intensity: { type: Type.NUMBER },
              risk: { type: Type.NUMBER },
              chefNotes: { type: Type.STRING }
            },
            required: ['title', 'flavors', 'dessertType', 'concept', 'layers', 'intensity', 'risk', 'chefNotes']
          }
        }
      });

      const jsonText = response.text?.trim() || '{}';
      const trioData = JSON.parse(jsonText);

      return res.json({ trio: trioData });

    } catch (error) {
      console.error('Error generating AI Trio:', error);
      return res.status(500).json({ error: 'Failed to generate AI Trio recipe' });
    }
  });

  // Health Endpoint
  app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', app: 'Палитра вкусов PWA' });
  });

  // Vite Middleware in Development or Static Files in Production
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[Палитра вкусов] Server listening on http://0.0.0.0:${PORT}`);
  });
}

startServer();
