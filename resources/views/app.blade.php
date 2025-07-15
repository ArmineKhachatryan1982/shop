<!doctype html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Broccoli - Organic Food HTML Template</title>
    <meta name="robots" content="noindex, follow" />
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Place favicon.png in the root directory -->
    <link rel="shortcut icon" href="{{ asset('/assets/img/favicon.png') }}" type="image/x-icon" />
    <!-- Font Icons css -->
    <link rel="stylesheet" href="{{ asset(('/assets/css/font-icons.css')) }}">
    <!-- plugins css -->
    <link rel="stylesheet" href="{{ asset('/assets/css/plugins.css') }}">
    <!-- Main Stylesheet -->
    <link rel="stylesheet" href="{{ asset('/assets/css/style.css') }}">
    <!-- Responsive css -->
    <link rel="stylesheet" href="{{ asset('/assets/css/responsive.css') }}">
     @routes
     @vite(['resources/js/app.js', "resources/js/Pages/{$page['component']}.vue"])
     @inertiaHead
</head>
<body>
     @inertia

    <!-- All JS Plugins -->
    {{-- <script src="{{ asset('/assets/js/plugins.js') }}"></script>
    <!-- Main JS -->
    <script src="{{ asset('/assets/js/main.js') }}"></script> --}}

</body>
</html>

