
import request from 'supertest';
import app from '../server.js';
import Tarefa from '../models/tarefa.js';

jest.mock('../models/tarefa.js', () => ({
  __esModule: true,
  default: {
    find: jest.fn(),
    create: jest.fn(),
    findByIdAndUpdate: jest.fn(),
    findByIdAndDelete: jest.fn(),
  }
}));

describe('API Tarefas', () => {

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('GET /api/tarefas', () => {
    it('deve retornar status 200 e um array de tarefas', async () => {
      Tarefa.find.mockResolvedValue([
        { _id: '1', titulo: 'Tarefa 1' },
        { _id: '2', titulo: 'Tarefa 2' },
      ]);

      const res = await request(app).get('/api/tarefas');

      expect(res.statusCode).toBe(200);
      expect(Array.isArray(res.body)).toBe(true);
      expect(res.body.length).toBe(2);
    });

    it('deve retornar 500 se o banco falhar', async () => {
      Tarefa.find.mockRejectedValue(new Error('Erro no banco'));

      const res = await request(app).get('/api/tarefas');

      expect(res.statusCode).toBe(500);
    });
  });

  describe('POST /api/tarefas', () => {
    it('deve criar uma tarefa e retornar 201', async () => {
      const novaTarefa = {
        _id: '3',
        titulo: 'Nova Tarefa',
        descricao: 'Teste'
      };

      Tarefa.create.mockResolvedValue(novaTarefa);

      const res = await request(app)
        .post('/api/tarefas')
        .send({
          titulo: 'Nova Tarefa',
          descricao: 'Teste'
        });

      expect(res.statusCode).toBe(201);
      expect(res.body.titulo).toBe('Nova Tarefa');
    });
  });

  describe('PUT /api/tarefas/:id', () => {
    it('deve atualizar uma tarefa e retornar 200', async () => {
      const tarefaAtualizada = {
        _id: '1',
        titulo: 'Atualizada'
      };

      Tarefa.findByIdAndUpdate.mockResolvedValue(tarefaAtualizada);

      const res = await request(app)
        .put('/api/tarefas/1')
        .send({ titulo: 'Atualizada' });

      expect(res.statusCode).toBe(200);
      expect(res.body.titulo).toBe('Atualizada');
    });
  });

  describe('DELETE /api/tarefas/:id', () => {
    it('deve deletar uma tarefa e retornar mensagem de sucesso', async () => {
      Tarefa.findByIdAndDelete.mockResolvedValue({});

      const res = await request(app).delete('/api/tarefas/1');

      expect(res.statusCode).toBe(200);
      expect(res.body.mensagem).toBe('Tarefa removida com sucesso');
    });
  });

});