<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ $title }}</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 40px;
        }
        h1 {
            text-align: center;
        }
        table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
        }
        th, td {
            border: 1px solid #000;
            padding: 8px;
            text-align: left;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>

    <h1>{{ $title }}</h1>

    <table>
        <thead>
            <tr>
                <th>NIP</th>
                <th>Nama Guru</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($data as $guru)
                <tr>
                    <td>{{ $guru->nip }}</td>
                    <td>{{ $guru->user->name }}</td>
                </tr>
            @endforeach
        </tbody>
    </table>

</body>
</html>
