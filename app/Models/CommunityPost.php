<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CommunityPost extends Model
{
    use HasFactory;
    protected $fillable = [
        'category_id',
       'title',
       'location',
        'mobile',
       'description',
       'image',
       'status',
       'created_by',
        'updated_by'
    ];

    protected $casts = [
        'created_at'  => 'datetime:d-m-Y h:i:s A',
        'updated_at' => 'datetime:d-m-Y h:i:s A',
    ];

    //protected function serializeDate(DateTimeInterface $date)
    //{
    //    return $date->format('Y-m-d H:i:s');
    //}

    protected function image(): Attribute
    {
    return Attribute::make(
        get: fn ($value) => url('uploads/'.$value),
    );
    }
}
