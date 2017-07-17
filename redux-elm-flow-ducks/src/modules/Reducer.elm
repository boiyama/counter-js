port module Reducer exposing (..)

import Json.Decode exposing (Value)
import Json.Encode exposing (int)
import Process exposing (sleep)
import Task exposing (perform)
import Time exposing (millisecond)
import Redux


-- PORT


port increase : (Value -> msg) -> Sub msg


port increaseIfOdd : (Value -> msg) -> Sub msg


port increaseAsync : (Value -> msg) -> Sub msg


port decrease : (Value -> msg) -> Sub msg



-- MODEL


type alias Model =
    Int


init : ( Model, Cmd Msg )
init =
    ( 0, Cmd.none )


encode : Model -> Json.Encode.Value
encode model =
    int model



-- Msg


type Msg
    = Increase
    | IncreaseIfOdd
    | IncreaseAsync
    | Decrease



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        Increase ->
            ( model + 1, Cmd.none )

        IncreaseIfOdd ->
            let
                count =
                    if model % 2 /= 0 then
                        model + 1
                    else
                        model
            in
                ( count, Cmd.none )

        IncreaseAsync ->
            ( model, increaseInSecond )

        Decrease ->
            ( model - 1, Cmd.none )


increaseInSecond : Cmd Msg
increaseInSecond =
    setTimeout Increase 1000


setTimeout : Msg -> Float -> Cmd Msg
setTimeout msg delay =
    perform (always msg) (sleep (delay * millisecond))



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions model =
    Sub.batch
        [ increase <| always Increase
        , increaseIfOdd <| always IncreaseIfOdd
        , increaseAsync <| always IncreaseAsync
        , decrease <| always Decrease
        ]



-- MAIN


main : Program Never Model Msg
main =
    Redux.program
        { init = init
        , update = update
        , encode = encode
        , subscriptions = subscriptions
        }
