
      function buscarFornecedor() {

        var req;
        // console.log('teste');
        // Verificando Browser
        if (window.XMLHttpRequest) {
          req = new XMLHttpRequest();
        } else if (window.ActiveXObject) {
          req = new ActiveXObject("Microsoft.XMLHTTP");
        }

        //  buscar nome fornecedor

        // Arquivo PHP juntamente com o valor digitado no campo (método GET)
        var cgccpf = document.getElementById('cgccpf').value;
        resultado = cgccpf.replace(/[^\d]+/g, '');
        var cgccpf = resultado;
        if (cgccpf > 0) {
          console.log(cgccpf);

          var url = "gerar_nome_fornecedores?cod=" + cgccpf;

          // Chamada do método open para processar a requisição
          req.open("Get", url, true);
          // Quando o objeto recebe o retorno, chamamos a seguinte função;
          req.onreadystatechange = function() {
            // Exibe a mensagem "Buscando Distribuidores e Revendedores..." enquanto carrega
            if (req.readyState == 1) {
              document.getElementById("nomfor").value = 'Buscando Fornecedor...';
            }
            if (req.readyState == 4 && req.status == 200) {
              var resposta = req.responseText;
              // console.log(resposta);
              document.getElementById("nomfor").value = resposta;
              if (resposta === "") {
                // alert("Fornecedor inativo ou inexistente.");
                document.getElementById("codfor").value = "";
              }
            }
          }
          req.send(null);
        } else {
          document.getElementById("codfor").value = "";
          document.getElementById("cgccpf").value = "";
          document.getElementById("nomfor").value = "";
        }
      }