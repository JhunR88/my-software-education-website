// İÇERİK BÖLÜMÜ BAŞLANGIÇ

function loadPDF(file){
  const frame = document.getElementById("pdfFrame");
  frame.src = file;
}

// editor çalıştırma (basit preview)
function runCode(){
  const code = document.getElementById("codeEditor").value;
  const preview = document.getElementById("preview");

  preview.srcdoc = code;
}

//editorde çıkan ilk metin
document.addEventListener("DOMContentLoaded", function () {
  const editor = document.getElementById("codeEditor");

  const defaultTemplate = `<!DOCTYPE html>
<html>
  <head>
    <style>

    </style>
  </head>

  <body>

  </body>
</html>`;

  editor.value = defaultTemplate;
});

// İÇERİK BÖLÜMÜ SON