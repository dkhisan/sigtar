<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    protected $fillable = [
        'name', 'username', 'password'
    ];

    protected $hidden = ['password'];

    public function users()
    {
        return $this->hasMany('App\Task');
    }
}
