<script>
document.querySelectorAll(".panel-btn").forEach(btn=>{
  btn.addEventListener("click",()=>{
    const item = btn.parentElement;
    item.classList.toggle("active");
  });
});
</script>