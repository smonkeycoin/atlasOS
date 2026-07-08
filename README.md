# ATLAS OS

ATLAS OS es una primera versión local de un SaaS inmobiliario para México y LATAM creado por R³ Lab Studio.

No es solo un CRM. Es un sistema operativo inmobiliario pensado para conectar inventario, leads, asesores, deals, WhatsApp, automatizaciones, documentos, analytics y publicación web en un solo núcleo operativo.

## Cómo correrlo localmente

Opción 1: abrir `index.html` directamente en el navegador.

Opción 2: correr un servidor local desde esta carpeta:

```bash
python3 -m http.server 5500 --bind 127.0.0.1
```

Luego abrir:

```text
http://127.0.0.1:5500
```

## Login demo

Usuario:

```text
admin@atlasos.mx
```

Password:

```text
atlas123
```

También existe el botón `Entrar como Founder Demo`.

La sesión se guarda en `localStorage`. El botón `Cerrar sesión` elimina la sesión local.

## Filosofía de arquitectura

Atlas parte de eventos, no de pantallas aisladas.

```text
Nuevo lead
→ Lead Engine
→ Asignación automática
→ WhatsApp
→ Deal
→ Tarea
→ Seguimiento
→ Kanban
→ Web Sync
→ Analytics
→ Notificación
```

La idea central es que cada evento pueda activar una acción: seguimiento, WhatsApp, tarea, publicación web o alerta gerencial.

El `Property Engine` evita doble captura y mantiene sincronizada la información comercial, operativa y pública. El `Web Engine` no edita HTML manualmente; consume datos centrales para publicar listings, landing pages, SEO metadata, MLS y portales.

## Diferencia contra desarrollos a la medida

Un desarrollo a la medida suele resolver flujos de una empresa específica. ATLAS OS está pensado como SaaS multiempresa, modular, automatizable y medible desde la base:

- Workspace selector
- Tenant ID demo
- Roles
- Plan Founder
- Módulos activables
- Billing placeholder
- Integraciones tipo marketplace
- Workflows reutilizables

## V1 Local Prototype

Esta versión incluye:

- UI responsive en HTML, CSS y JavaScript vanilla
- Login fake
- Sesión en `localStorage`
- Navegación SPA por hash/state interno
- Datos demo creíbles
- Command Center
- Properties con drawer de Property Engine
- CRM con Lead Intelligence
- Deals / Kanban con drag & drop local y botones de etapa
- WhatsApp OS operativo mock
- Automation Engine visual
- Web Engine
- Docs
- Analytics con gráficos CSS
- Marketplace
- Settings multi-tenant
- Logo SVG propio

## Roadmap SaaS

### Fase 1 Local Prototype

- UI
- Datos demo
- Navegación
- Workflows mock
- Property Engine mock
- Web Engine mock

### Fase 2 Backend

- Supabase/Postgres
- Auth real
- Multi tenant
- RLS
- Storage
- Audit logs

### Fase 3 Automation

- Event bus
- Workflow engine
- Job queue
- Webhooks
- WhatsApp API

### Fase 4 Property Engine

- API de propiedades
- Media manager
- SEO metadata
- Web sync
- Landing generator
- MLS connector

### Fase 5 Intelligence

- Lead scoring
- Recomendaciones
- Summaries
- Next best action
- Performance insights

### Fase 6 Billing

- Stripe/Mercado Pago
- Planes
- Límites
- Add-ons
- Marketplace

## Schema futuro propuesto

```sql
tenants (
  id,
  name,
  plan,
  status,
  created_at
)

users (
  id,
  tenant_id,
  name,
  email,
  role_id,
  status,
  created_at
)

roles (
  id,
  tenant_id,
  name,
  permissions
)

properties (
  id,
  tenant_id,
  title,
  city,
  neighborhood,
  price,
  operation,
  status,
  advisor_id,
  web_sync_status,
  mls_status,
  media_completeness,
  lead_interest_score,
  updated_at
)

property_media (
  id,
  tenant_id,
  property_id,
  url,
  type,
  sort_order,
  metadata
)

leads (
  id,
  tenant_id,
  name,
  source,
  advisor_id,
  temperature,
  score,
  next_follow_up_at,
  summary,
  created_at
)

deals (
  id,
  tenant_id,
  lead_id,
  property_id,
  stage_id,
  value,
  advisor_id,
  last_interaction_at,
  score
)

deal_stages (
  id,
  tenant_id,
  name,
  sort_order,
  probability
)

activities (
  id,
  tenant_id,
  actor_id,
  entity_type,
  entity_id,
  event_type,
  payload,
  created_at
)

tasks (
  id,
  tenant_id,
  owner_id,
  lead_id,
  deal_id,
  title,
  due_at,
  status
)

messages (
  id,
  tenant_id,
  lead_id,
  channel,
  direction,
  body,
  status,
  sent_at
)

workflows (
  id,
  tenant_id,
  name,
  trigger_type,
  conditions,
  actions,
  status
)

integrations (
  id,
  tenant_id,
  provider,
  status,
  config,
  connected_at
)

documents (
  id,
  tenant_id,
  template_type,
  lead_id,
  deal_id,
  property_id,
  status,
  generated_by,
  created_at
)
```

## Próximos pasos técnicos

1. Separar datos mock en módulos o endpoints locales.
2. Añadir router ligero y estado más formal.
3. Migrar persistencia a Supabase/Postgres.
4. Implementar auth real y RLS por tenant.
5. Definir eventos internos y audit logs.
6. Conectar WhatsApp Business API.
7. Construir Workflow Engine real.
8. Crear API del Property Engine.
9. Añadir Web Engine con preview y publish queue reales.
10. Incorporar billing con Stripe y Mercado Pago.
