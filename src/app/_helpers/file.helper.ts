export function downloadFile(
    data : any, //dados que serão lidos da API
    type : string, //tipo de arquivo
    name : string //nome do arquivo
){

    // nine types dos arquivos
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types

    var blob = null;

    //verificar o tipo do arquivo
    if(type == 'PDF'){
        //capturar o conteudo do arquivo
        blob = new Blob([data], { type: "application/pdf" });
        name += ".pdf";
    }
    else if(type == 'EXCEL'){
        //capturar o conteudo do arquivo
        blob = new Blob([data], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
        name += ".xlsx";
    }

    //fazer o download do arquivo..
    var url = window.URL.createObjectURL(blob);

    //criando um link para download do arquivo
    var downloadLink = document.createElement("a");
    downloadLink.href = url;
    downloadLink.download = name;

    //executo o link
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
}
