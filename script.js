function enviarWhatsApp(plan = null) {
  let mensaje = plan
    ? `Hola, estoy interesado/a en contratar el plan: ${plan}. ¿Podrías darme más información?`
    : "Hola, quiero más información sobre los planes de streaming que ofrecen.";

  const url = `https://wa.me/593997368957?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank");
}
