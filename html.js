//EDİTÖR KISMI

const select = document.getElementById("pdfSelect");
const viewer = document.getElementById("pdfViewer");

select.addEventListener("change", function () {
  viewer.src = this.value;
});

// live preview (çok basit)
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", function () {
  preview.srcdoc = this.value;
});














// PDF seçimi ve görüntüleme

const pdfSelect = document.getElementById("pdfSelect");
const pdfOverlay = document.getElementById("pdfOverlay");
const pdfViewer = document.getElementById("pdfViewer");

// sayfa açılınca görünür
pdfOverlay.style.display = "flex";

pdfSelect.addEventListener("change", function () {

  if (this.value !== "") {
    pdfViewer.src = this.value;
    pdfOverlay.style.display = "none"; // yazıyı kaldır
  } else {
    pdfOverlay.style.display = "flex";
  }

});