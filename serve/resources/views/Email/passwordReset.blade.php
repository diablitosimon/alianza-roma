@component('mail::message')
# Cambio de contraseña

Para cambiar su contraseña haga click en el boton

@component('mail::button', ['url' => 'http://localhost:4200/response?token='. $token])
Recuperar contraseña
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent
