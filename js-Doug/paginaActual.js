<script>
  const select = document.getElementById('pageSelect');
  const current = location.pathname.split('/').pop(); // p. ej. "about.html"
  select.value = current;
</script>
