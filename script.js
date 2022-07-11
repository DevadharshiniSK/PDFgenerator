const generatePDF = async (name) => {
    const { PDFDocument, rgb } = PDFLib;   
    
    const exBytes = await fetch("./certificate.pdf").then((res)=>{
      return res.arrayBuffer();    
    });


    const pdfDoc = await PDFDocument.load(exBytes);
    const pages = pdfDoc.getPages()
    const pg = pages[0]
   
    pg.drawText(name,{
         x: 55,
         y: 265,
         size: 25

    })
     const uri = await pdfDoc.saveAsBase64({dataUri: true})

    document.querySelector("#coinpdf").src = uri;


       
}
  
generatePDF("DEVADHARSHINI S K")

let btnDownload = document.querySelector("button");
btnDownload.addEventListener("click", startDownload);
async function startDownload() {
let src = "certificate.pdf";
let fileName = "CoinEarner";
const res = await fetch(src);
const blob = await res.blob();
saveAs(blob, fileName);
}
