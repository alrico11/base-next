"use client"
import { useImperativeQuery } from "@/hooks/use-imperative";
import { useMutate } from "@/hooks/use-mutate";
import { auth } from "@/lib";
import { useQueryClient } from "@tanstack/react-query";
import { error } from "console";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/navigation";
import { AuthForgotPasswordFn, AuthLoginFn, AuthLogoutFn, AuthRegisterFn } from "../fn";

export const useAuthApi = () => {
  const { push } = useRouter()
  const client = useQueryClient()
  const login = useImperativeQuery(
    (args) => ['auth', args],
    AuthLoginFn
  )
  const loginApi = () => {
    const { data, ...rest } = useMutate({
      mutationFn: AuthLoginFn,
      queryKey: 'auth'
    })
    return {
      data: data?.data, ...rest
    }
  }

  const registerApi = () => {
    const { data, ...rest } = useMutate({
      mutationFn: AuthRegisterFn,
      queryKey: 'auth'
    })
    return {
      data: data?.data, ...rest
    }
  }
  const { fetch: register } = useImperativeQuery(
    (args) => ['auth', args],
    AuthRegisterFn
  )

  const { fetch: logout } = useImperativeQuery(
    (args) => ['auth', args],
    AuthLogoutFn
  )

  const forgotPasswordApi = useImperativeQuery(
    (args) => ['auth', args],
    AuthForgotPasswordFn
  )

  const logoutApi = () => {
    client.clear()
    logout({})
    localStorage.clear()
    setTimeout(() => {
      push("/login")
    }, 100)
  }

  const loginGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    signInWithPopup(auth, provider)
      .then(async (result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const firebaseIdToken = await result.user.getIdToken()
        const data = await login.fetch({ firebaseIdToken })
        // setAuth(data.data)
        push('/')
        // success({
        //   title: "Login Successful",
        //   description: "Yeay! You've successfully logged in. It's great to see you again!"
        // })
      }).catch(() => {
        error({
          title: "Oops! Login Failed",
          description: "It looks like your email is not registered"
        })
      });
  }

  const registerGoogle = () => {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    provider.addScope("email");
    signInWithPopup(auth, provider)
      .then(async (result) => {
        GoogleAuthProvider.credentialFromResult(result);
        const firebaseIdToken = await result.user.getIdToken()
        console.log(result.user.displayName)
        const data = await register({ firebaseIdToken, name: result.user.displayName || "user" })
        // setAuth(data.data)
        push('/')
        // success({
        //   title: "Register Successful",
        //   description: "Yeay! You've successfully registered."
        // })
      }).catch(() => {
        error({
          title: "Oops! Register Failed",
          description: "It looks like your email is already registered"
        })
      });
  }

  return {
    client,
    registerApi,
    logoutApi,
    loginGoogle,
    registerGoogle,
    loginApi,
    forgotPasswordApi,
    auth,
    // setAuth,
  }
}
