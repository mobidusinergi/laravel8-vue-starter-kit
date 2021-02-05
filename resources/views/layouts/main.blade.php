<!doctype html>
<html lang="en">

<head>
    <title>Rumah Sakit Medina Garut</title>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <meta name="csrf-token" content="{{ csrf_token() }}">


    <link rel="icon" href="/assets/images/playstore.png" type="image/x-icon">
    <!-- VENDOR CSS -->
    <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/vendor/font-awesome/css/font-awesome.min.css">
    <link rel="stylesheet" href="/assets/vendor/animate-css/vivify.min.css">

    <link rel="stylesheet" href="/assets/vendor/fullcalendar/fullcalendar.min.css">

    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.css'/>
    <link rel='stylesheet' href='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css'/>


    <link rel="stylesheet" href="/assets/vendor/animate-css/vivify.min.css">
    <link rel="stylesheet" href="/assets/vendor/c3/c3.min.css" />
    <link rel="stylesheet" href="/assets/vendor/chartist/css/chartist.min.css">
    <link rel="stylesheet" href="/assets/vendor/chartist-plugin-tooltip/chartist-plugin-tooltip.css">

    <!-- MAIN CSS -->
    <link rel="stylesheet" href="/assets/css/site.min.css">
    <link rel="stylesheet" href="/assets/custom.css">

</head>

<body class="theme-blue">

    <!-- Page Loader -->
    <div class="page-loader-wrapper">
        <div class="loader">
            <div class="m-t-30"><i class="fa fa-cube font-25"></i></div>
            <p>Please wait...</p>
        </div>
    </div>

    <!-- Overlay For Sidebars -->
    <div class="overlay"></div>

    <div id="wrapper">

        <div id="app">
            <main-layout></main-layout>
        </div>

    </div>

    <!-- Javascript -->
    <!-- Latest jQuery -->
    <script src="/assets/vendor/jquery/jquery-3.3.1.min.js"></script>

    <!-- Bootstrap 4x JS  -->
    <script src="/assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>

    <script src="/assets/bundles/vendorscripts.bundle.js"></script>

    <script src="/assets/js/common.js"></script>

    <!-- 3rd Party -->
    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.1.4/toastr.min.js'></script>
    <script src="https://cdn.jsdelivr.net/npm/gasparesganga-jquery-loading-overlay@2.1.7/dist/loadingoverlay.min.js"></script>
    <script src='https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.js'></script>

    <script src="/assets/bundles/fullcalendarscripts.bundle.js"></script>
    <script src="/assets/js/pages/calendar.js"></script>

    <script src="https://www.openjs.com/scripts/events/keyboard_shortcuts/shortcut.js"></script>


    <script src="{{ asset('js/app.js') }}?{{ rand(00,99) }}"></script>
</body>

</html>
