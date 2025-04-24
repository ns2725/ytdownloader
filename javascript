async function download() {
  const url = document.getElementById("url").value;
  const format = document.querySelector('input[name="format"]:checked').value;

  if (!url) {
    alert("Please paste a YouTube URL.");
    return;
  }

  document.getElementById("status").innerText = "Processing...";

  const response = await fetch("https://your-backend-domain.com/download", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url, format }),
  });

  const blob = await response.blob();
  const downloadUrl = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = downloadUrl;
  a.download = `video.${format}`;
  document.body.appendChild(a);
  a.click();
  a.remove();

  document.getElementById("status").innerText = "Done!";
}
