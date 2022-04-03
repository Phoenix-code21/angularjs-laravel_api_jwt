<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Validator;

class RegisterController extends Controller
{
    public function register(Request $request)
    {
        $Validator = Validator::make($request->all(), [
            'name' => 'required|string|max:100',
            'email' => 'required|email',
            'password' => 'required'
        ]);

        if($Validator->fails())
        {
            return response()->json(["error" => 'Preencha os campos corretamente.'],200);
        }
        else
        {
            $dados = array(
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password)
            );
            
            $users = new User();

            if($users->checkEmail($request->email) != null)
            {
                return response()->json(["error" => "Endereço de e-mail já cadastrado."],200);
            }
            
            else
            {
                if($users->register($dados))
                {
                    return response()->json(["success" => "Usuário cadastrado com sucesso."],200);
                }

                else
                {
                    return response()->json(["error" => "Erro ao cadastrar usuário."],200);
                }

            }
        }
    }
}
