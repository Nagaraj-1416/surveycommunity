<?php

namespace App\Http\Controllers;

use App\Models\CommunityPostCategory;
use App\Models\CommunityPost;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommunityPostCategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        return Inertia::render('Home',[
            'communityPostCategoryOptions' => CommunityPostCategory::where('status','!=','2')->select('id as value','category_name as label')->get(),
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        
    }

    public function listbycategory(Request $request)
    {
        $perPage = $request->input('pageSize',5);
        $currentPage = $request->input('currentPage',1);

        $posts =  CommunityPost:: where('status','!=',2,)->where('category_id',$request->input('selectedCategory'))->orderBy('id', 'desc');

        //dd($request->input('selectedCategory'));
        //if(isset($request->paginateState)){
        //    $communityPosts = $posts
        //->skip(($request->paginateState['currentPage'] - 1) * $request->paginateState['pageSize'])
        //->take($perPage)
        //->get();
        //}else{
            //dd($currentPage);
        $totalPosts = $posts->count();

            $communityPosts = $posts
            ->skip(($currentPage - 1) * 2)
            ->take(5)
            ->get();


        //dd($communityPosts);
        if ($request->wantsJson()) {
            return response()->json([
                'communityPostCategoryOptions' => CommunityPostCategory::where('status','!=','2')->select('id as value','category_name as label')->get(),
                'communityPosts' => $communityPosts,
                'selectedCategory'=>$request->input('selectedCategory'),
                'per_page' => $perPage,
                'current_page' => $currentPage,
                'page_count' => ceil($totalPosts / $perPage),
            ]);
        } else {
            return Inertia::render('CommunityPost/List',[
                'communityPostCategoryOptions' => CommunityPostCategory::where('status','!=','2')->select('id as value','category_name as label')->get(),
                'communityPosts' => $communityPosts,
                'selectedCategory'=>$request->input('selectedCategory'),
                'per_page' => $perPage,
                'current_page' => $currentPage,
                'page_count' => ceil($totalPosts / $perPage),
            ]);
        }
       
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(CommunityPostCategory $communityPostCategory)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(CommunityPostCategory $communityPostCategory)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, CommunityPostCategory $communityPostCategory)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(CommunityPostCategory $communityPostCategory)
    {
        //
    }
}
