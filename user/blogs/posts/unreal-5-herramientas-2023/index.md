---
title: Unreal 5 Herramientas 2023
description: Unreal 5 Features.
summary: Unreal Summary early 2023.
language: español
published: '2023-01-01T21:54:42.00'
# updated: '2023-01-02T02:55:58.69Z+01:00'
cover: ./unreal.jpeg
coverCaption: Unreal 5
coverStyle: 'IN'
tags:
  - [Blog, UE5]
---

<script lang="ts">
  import Youtube from '$lib/components/youtube.svelte'
</script>

# Unreal 5 Herramientas 2023
<!-- 
Created by: str3Dlok
Created by 1: str3Dlok
Fecha Publicación: 01/01/2023
coverCaption: ⬆️ Hero image & info y link
description: comparacion Unity Unreal
status: ☑️ Done
summary: Unreal Summary early 2023
tags: Blog, UE5
title: Unreal 5 Features -->

<!-- ![1366_2000 (1).jpeg](Unreal%205%20Herramientas%202023%2064acbc155e1e4815ab41be3efbde8030/1366_2000_(1).jpeg) -->

He estado las conferencias de presentación de Unreal 5 y han hablado de nuevas funcionalidades/flujos de trabajo:

- Dividir Niveles por Escenas y Subescenas que se pueden ejecutar a placer en vez de montar todo en una escena general
- Chunking para dividir escenarios enormes de mudo abierto
- Crear Plugins para poder publicar packs completos en el marketplace(el proceso de crear plugin no es tan sencillo, requiere mucho control de programación para la exportación correcta)
- Funcionar por proyectos temporales de prueba y luego Migrar/Migrate a la escena limpia
- Migrar: exportar objetos(uasset) con todas sus referencias a escenas nuevas(es la mejor manera de trabajar por lo visto)
- Level Instancing es crear escenas con subescenas que se ejecutan a petición( incluso un objeto simple puede ser una escena y es mas eficiente que ir sacando Prefabs)
- World Partition(principio para chunking) ⇒ Enable Streaming ⇒ (Crea un sistema de grid para dividir nuestro mundo por chunks)
- Data Layers: Capas que tambien se pueden referenciar por código/nodos para quitar, poner, o modificar en tiempo real(para mejorar visualizacion en editor y rendimiento en Editor y juego final en diferentes plataformas
- HLOD: Lods automaticos
- Virtual Textures y Shadow Maps (han mejorado rendimiento y aumentado la calidad)
- Nanite y Lumen, que es de lo que mas se habla pero tiene su truco
    - Nanite: dividir geometria y aumentar detalle según de la distancia de la cámara
    - Lumen: Iluminación Global Dinamica avanzada

# Sobre Conferencia de “how to make better blueprints”:

<Youtube id="mW0IlgjF-iw" />

- Level Instancing Blueprints (escenas y subescenas)
- Collapse Nodes (Hacer grupos de nodos, ya sabemos el flujo, conviene hacer grupos básicos que no se vayan a acceder, sino mejor tener todo visible para que no haya perdida)
- Usar Custom Events antes que ticks(consejo)
- Soft References (en vez de cargar todo el contenido del juego al incio, hacerlo cuando se requiera y asi reducir tiempos de carga y gpus saturadas)
- Exposed Funcitions
- Editor Utility
- Geoemtry Scripts (un principio como el de geometry nodes, pero sigue siendo experimental y es muy básico, asi que no usar por ahora)

# Sobre video “how to get better performance in teams”:

<Youtube id="GuIav71867E" />

- Class Instance: Este es muy bueno porque permite hacer un Prefab “Padre” que contiene todas las propiedades y los hijos pueden usar las propiedades del padre o incluso crear nuevas y modificar a partir de la info del padre(y son independientes en todo momento)
- Tablas de Datos en CSV: Basicamente hacer interfaces en tablas para facilitar introducir objetos nuevos, modificar valores simples, etc. Sin tener que entrar en proyecto o nodos lo hace mucho mas facil para ajustes finales(ej: vida = 100, velocidad correr= 2.5)
- Event Dispatching and Binding (tengo que mirar bien este punto)
- Interfaces locales: Interesante porque se plantea que cada objeto tenga la interfaz que aparece cuando te acerques a este, pero en vez de referenciarlo a la interfaz del jugador, es una interfaz creada solo con el propio objeto y ejectuada solo cuando se pide(sino tendríamos asignadas a personaje miles de interfaces ocultas, así lo hace menos caotico)