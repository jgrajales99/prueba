// Función para redireccionar al lobby
function redirectToLobby() {
    // Redirigir al usuario al lobby después de iniciar sesión
    window.location.href = "lobby.html";
}

// Verificar si el usuario ha iniciado sesión al cargar la página
document.addEventListener('DOMContentLoaded', function() {
    // Verificar si el usuario ha iniciado sesión
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        // Si no ha iniciado sesión, redirigirlo a la página de inicio de sesión
        window.location.href = 'index.html';
    }
});

// Función para manejar el envío del formulario de inicio de sesión
function handleLogin(event) {
    event.preventDefault(); // Evitar que el formulario se envíe normalmente
    
    // Aquí iría la lógica de verificación de credenciales
    
    // Simulando un inicio de sesión exitoso
    localStorage.setItem('isLoggedIn', 'true');
    redirectToLobby(); // Redirigir al lobby
}
function cerrarSesion() {
    // Aquí puedes agregar cualquier lógica necesaria para cerrar sesión,
    // como eliminar tokens de sesión, limpiar cookies, etc.
    
    // Por ejemplo, podrías eliminar un token de sesión guardado en localStorage:
    localStorage.removeItem('token');

    // Luego redirige al usuario a la página de inicio de sesión
    window.location.href = 'index.html'; 
}
