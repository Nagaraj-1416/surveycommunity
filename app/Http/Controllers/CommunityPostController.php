<?php

namespace App\Http\Controllers;

use App\Models\CommunityPost;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\CommunityPostCategory;
use Inertia\Inertia;
use Illuminate\Support\Facades\Redirect;

class CommunityPostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = $request->input('id');

        $data = $request->all();

        $communityPost = CommunityPost::updateOrCreate(['id' => $id], $data);

        $perPage = 2;
        $currentPage = 1;

        $posts =  CommunityPost:: where('status','!=',2,)->where('category_id',$request->input('category_id'))->orderBy('id', 'desc');
        //dd($posts->get());

        $totalPosts = $posts->count();

            $communityPosts = $posts
            ->skip(($currentPage - 1) * 2)
            ->take(2)
            ->get();

        
        //dd( $communityPost);
        return response()->json([
            'communityPostCategoryOptions' => CommunityPostCategory::where('status','!=','2')->select('id as value','category_name as label')->get(),
            'communityPosts' => $communityPosts,
            'selectedCategory'=>$request->input('category_id'),
            'per_page' => $perPage,
            'current_page' => $currentPage,
            'page_count' => ceil($totalPosts / $perPage),
        ]);

        

        //return response()->json([
        //    'communityPostCategoryOptions' => CommunityPostCategory::where('status','!=','2')->select('id as value','category_name as label')->get(),
        //    'communityPosts' => CommunityPost:: where('status','!=',2,)->where('category_id',$request->input('category'))->orderBy('id', 'desc')->get(),
        //    'selectedCategory'=>$request->input('category')
        //]);
        
    }

    /**
     * Display the specified resource.
     */
    public function show(CommunityPost $communityPost)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CommunityPost $communityPost)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CommunityPost $communityPost)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CommunityPost $communityPost)
    {
        //
    }
}
