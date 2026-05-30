import ServicoPagamento from '../src/servicoPagamento.js';
import assert from 'node:assert';

describe('Servico de pagamento', () => {
    it('Validar pagamento com categoria cara', () => {
        const servico = new ServicoPagamento();

        servico.pagar(
            '0987-7656-3475',
            'Samar',
            100.87
        );
        const ultimoPagamento = servico.consultar();

        assert.equal(ultimoPagamento.categoria, 'cara');
    });

    it('Validar pagamento com categoria padrao', () => {
        const servico = new ServicoPagamento();

        servico.pagar(
            '0987-7656-3479',
            'Samar',
            80.87
        );
        const ultimoPagamento = servico.consultar();

        assert.equal(ultimoPagamento.categoria, 'padrao');

    });

    it('Validar consulta do ultimo pagamento', () => {
        const servico = new ServicoPagamento();

        servico.pagar(
            '0987-7656-3546',
            'Empresa X',
            80.87
        );

        servico.pagar(
            '0987-7656-3340',
            'Empresa',
            80.87
        );

        const ultimoPagamento = servico.consultar();

        assert.equal(ultimoPagamento.codigoBarras, '0987-7656-3340');

    });
});