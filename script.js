// Função para exibir os dados da planilha
function exibirDados(data, tabletop) {
    var html = '<table>';
    // Cria o cabeçalho da tabela com os nomes das colunas
    html += '<tr>';
    for (var key in data[0]) {
        html += '<th>' + key + '</th>';
    }
    html += '</tr>';
    // Preenche a tabela com os dados
    for (var i = 0; i < data.length; i++) {
        html += '<tr>';
        for (var key in data[i]) {
            html += '<td>' + data[i][key] + '</td>';
        }
        html += '</tr>';
    }
    html += '</table>';
    // Insere a tabela no contêiner especificado
    document.getElementById('dadosDaPlanilha').innerHTML = html;
}

// Função para carregar os dados da planilha
function carregarPlanilha() {
    // URL da planilha do Google Sheets
    var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vR6XxSG_yek8mZpdNHPXDtZQ62VBOF0Zd5O3rXO6JrnWNgLdjVgkQoceTq4tj7RlhPi7-aUppdjUrSN/pubhtml?gid=1432598956&single=true';
    // Carrega os dados da planilha usando Tabletop.js
    Tabletop.init({
        key: publicSpreadsheetUrl,
        callback: exibirDados,
        simpleSheet: true
    });
}

// Chamada para carregar os dados da planilha quando a página é carregada
window.addEventListener('DOMContentLoaded', carregarPlanilha);
