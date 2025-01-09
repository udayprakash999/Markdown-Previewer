import html2canvas from "html2canvas";

const Download = () => {
  const previewElement = document.getElementById("preview");
  console.log(previewElement)

  const downloadAsImg = async () => {
    if (!previewElement) {
      alert("Preview is empty or not available");
      return;
    }
    const canvas = await html2canvas(previewElement);
    const imageData = canvas.toDataURL("image/png");

    const link = document.createElement("a");
    link.href = imageData;
    link.download = "markdownPreview.png";
    link.click();
  };


  return (
    <>
      <button
        onClick={downloadAsImg}
        className="download-btn"
      >
        Download as IMG
      </button>
    </>
  );
};

export default Download;
