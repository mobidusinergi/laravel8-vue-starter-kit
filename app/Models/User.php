<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    public function detail() {

        if ($this->user_type == 'admin')
        {
            return $this->admin();
        }
        else if ($this->user_type == 'dokter')
        {
            return $this->dokter();
        }
        else if ($this->user_type == 'apoteker')
        {
            return $this->apoteker();
        }
        else if ($this->user_type == 'pasien')
        {
            return $this->pasien();
        }
        else if ($this->user_type == 'frontoffice')
        {
            return $this->frontoffice();
        }
        
    }

    public function admin()
    {
        return $this->hasOne('App\Models\Admin');
    }

    public function frontoffice()
    {
        return $this->hasOne('App\Models\FrontOffice');
    }
  
    public function dokter()
    {
        return $this->hasOne('App\Models\Dokter');
    }


    public function apoteker()
    {
        return $this->hasOne('App\Models\Apoteker');
    }

    public function pasien()
    {
        return $this->hasOne('App\Models\Pasien');
    }
}
