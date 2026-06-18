# Serviço de Pagamento

Projeto em Node.js com testes automatizados.

## Conteúdo do repositório
- `src/servicoPagamento.js` - implementação do serviço
- `test/servicoPagamento.test.js` - testes automatizados
- `.github/workflows/ci.yml` - pipeline de CI
- `reports/` - relatórios de testes gerados localmente ou em CI

## Testes
Há 3 casos de teste em `test/servicoPagamento.test.js`:
1. Pagamento com categoria `cara`
2. Pagamento com categoria `padrao`
3. Consulta do último pagamento

## Como rodar localmente
No terminal, na pasta do projeto:

```powershell
npm ci
npm run test:report
```

Relatórios gerados:
- `reports/mochawesome-report.html`
- `reports/mochawesome-report.json`

## CI
O workflow `.github/workflows/ci.yml`:
- instala dependências com `npm ci`
- executa `npm run test:report`
- publica `reports/` como artifact `test-report`




