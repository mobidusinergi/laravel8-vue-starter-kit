<?php

namespace App\Imports;

use App\Models\Obat\Data;
use App\Models\Obat\Harga;
use App\Models\Obat\Kategori;
use App\Models\Obat\Satuan;
use Maatwebsite\Excel\Concerns\ToModel;

use Maatwebsite\Excel\Concerns\WithHeadingRow;
use Maatwebsite\Excel\Concerns\WithValidation;
use Illuminate\Validation\Rule;
use Str;

class ObatImport implements ToModel, WithHeadingRow, WithValidation
{
    /**
     * @param array $row
     *
     * @return \Illuminate\Database\Eloquent\Model|null
     */
    public function model(array $row)
    {

        $kategori = Kategori::firstOrNew(['nama' => $row['kategori']]);
        $kategori->nama = $row['kategori'] ? $row['kategori'] : 'Obat';
        $kategori->slug = Str::slug($row['kategori'] ? $row['kategori'] : 'Obat');
        $kategori->save();

        $barang = new Data;
        $barang->kode_obat = $this->randomNumber();
        $barang->kategori_id = $kategori->id;
        $barang->harga_beli = $row['harga_beli'];
        $barang->nama = $row['nama'];
        $barang->stok = $row['stok'] ? $row['stok'] : 0;

        if ($barang->save()) {

            $satuan1 = Satuan::firstOrNew(['nama' => $row['satuan1']]);
            $satuan1->slug = $row['satuan1'] ? $row['satuan1'] : 'pcs';
            $satuan1->nama = $row['satuan1'] ? $row['satuan1'] : 'pcs';
            $satuan1->save();

            if ($row['harga1']) {
                $harga1 = new Harga;
                $harga1->obat_id = $barang->id;
                $harga1->satuan_id = $satuan1->id;
                $harga1->harga_jual = $row['harga1'] ? $row['harga1'] : 0;
                $harga1->save();
            }

            if ($row['harga2']) {

                $satuan2 = Satuan::firstOrNew(['nama' => $row['satuan2']]);
                $satuan2->slug = $row['satuan2'] ? Str::slug($row['satuan2']) : 'pcs';
                $satuan2->nama = $row['satuan2'] ? $row['satuan2'] : 'pcs';
                $satuan2->save();

                $harga2 = new Harga;
                $harga2->obat_id = $barang->id;
                $harga2->satuan_id = $satuan2->id;
                $harga2->harga_jual = $row['harga2'] ? $row['harga2'] : 0;
                $harga2->save();
            }

            if ($row['harga3']) {
                $satuan3 = Satuan::firstOrNew(['nama' => $row['satuan3']]);
                $satuan3->slug = $row['satuan3'] ? Str::slug($row['satuan3']) : 'pcs';
                $satuan3->nama = $row['satuan3'] ? $row['satuan3'] : 'pcs';
                $satuan3->save();

                $harga2 = new Harga;
                $harga2->obat_id = $barang->id;
                $harga2->satuan_id = $satuan3->id;
                $harga2->harga_jual = $row['harga3'] ? $row['harga3'] : 0;
                $harga2->save();
            }

            if ($barang->save()) {
                return $barang;
            }
        }
    }

    private function randomNumber()
    {
        return rand(000000, 999999) . rand(00, 11) . time();
    }

    public function rules(): array
    {
        return [
            // 'nama' => ['required'],
            // 'stok' => ['numeric'],
            // 'satuan1' => ['required'],
            // 'harga1' => ['required', 'numeric'],
            // 'harga2' => ['numeric'],
            // 'harga3' => ['numeric'],
        ];
    }

    public function customValidationMessages()
    {
        return [
            'nama.required' => 'Nama Barang/Obat Harus Diisi',
            'stok.numeric' => 'Stok harus diisi dengan Angka.',
            'harga_beli.required' => 'Harga Beli harus diisi.',
            'harga_belirequired' => 'Harga Beli harus diisi.',
            'harga1.required' => 'Harga 1 harus diisi.',
            'harga1.numeric' => 'Harga 1 harus diisi dengan Angka.',
            'satuan1.required' => 'Harga 1 harus diisi.',
            'harga2.numeric' => 'Harga 2 harus diisi dengan Angka.',
            'harga3.numeric' => 'Harga 3 harus diisi dengan Angka.',
        ];
    }
}
