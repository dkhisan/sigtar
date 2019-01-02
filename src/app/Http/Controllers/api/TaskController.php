<?php

namespace App\Http\Controllers;

use App\Task;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class TaskController extends Controller
{
    /**
     * return all records on table tasks
     */
    public function index()
    {
        $user = auth()->user();
        $tasks = Task::orderBy('deadline', 'asc')
            ->where('user_id', $user->id)
            ->paginate(6);
        return response()->json($tasks, 200);
    }

    /**
     * return a record on table tasks
     */
    public function show($id)
    {
        $user = auth()->user();
        $task = Task::findOrFail($id)
            ->where('user_id', $user->id);
        return response()->json($task, 200);
    }

    /**
     * insert a new record on table tasks, return code 201 means 'created'
     */
    public function store(Request $request)
    {
        Validator::make($request->all(), [
            'name' => 'required|max:255',
            'description' => 'required|max:500',
            'deadline' => 'required'
        ])->validate();

        $task = Task::firstOrCreate($request->all());
        return response()->json($task, 201);
    }

    /**
     * update a existing record in tasks table, return code 200 means 'ok'
     */
    public function edit(Request $request, $id)
    {
        $user = auth()->user();
        $task = Task::findOrFail($id)
            ->where('user_id', $user->id);
        $task->update($request->all());

        return response()->json($task, 200);
    }

    /**
     * delete a record in table if exist, return code 204 means 'success'
     */
    public function destroy($id)
    {
        $user = auth()->user();
        $task = Task::findOrFail($id)
            ->where('user_id', $user->id);
        $task->delete();

        return response()->json(null,204);
    }
}
