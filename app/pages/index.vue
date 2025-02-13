<template>
  <div class="flex h-screen">
    <LayoutMenu />
    <!-- <aside class="h-full w-64 bg-gray-200">
      <ul class="p-4">
        <li class="mb-2">
          <a href="#" class="block rounded p-2 hover:bg-gray-300">Inicio</a>
        </li>
        <li class="mb-2">
          <a href="#" class="block rounded p-2 hover:bg-gray-300">Acerca</a>
        </li>
        <li class="mb-2">
          <a href="#" class="block rounded p-2 hover:bg-gray-300">Servicios</a>
        </li>
        <li class="mb-2">
          <a href="#" class="block rounded p-2 hover:bg-gray-300">Contacto</a>
        </li>
      </ul>
    </aside> -->

    <div class="flex flex-1 flex-col">
      <!-- <nav class="bg-blue-500 p-4">
        <div class="container mx-auto flex items-center justify-between">
          <a href="#" class="text-xl font-bold text-white">Mi Aplicación</a>
          <div></div>
        </div>
      </nav> -->
      <LayoutNavbar />

      <main class="flex-1 p-6">
        <div class="container mx-auto">
          <h1 class="mb-4 text-3xl font-bold">Contenido Principal</h1>
          <p class="text-gray-800">
            Este es el contenido principal de tu página. Puedes agregar aquí cualquier tipo de
            información, como texto, imágenes, formularios, etc.
          </p>
        </div>
      </main>

      <footer class="bg-gray-300 p-4 text-center">
        <p>&copy; 2023 Mi Aplicación. Todos los derechos reservados.</p>
      </footer>
    </div>
  </div>
</template>
