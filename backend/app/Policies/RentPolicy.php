<?php

namespace App\Policies;

use App\Models\User;
use Illuminate\Auth\Access\HandlesAuthorization;

class RentPolicy
{
    use HandlesAuthorization;

    public function viewRentsByUser(User $user, int $userId)
    {
        if ($user->isAdmin() || ($user->id == $userId))
            return true;

        abort(403);
    }

    public function viewAny(User $user)
    {
        if ($user->isAdmin())
            return true;

        abort(403);
    }
}
