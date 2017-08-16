module Main.Test exposing (..)

import ElmTestBDDStyle exposing (..)
import Expect exposing (..)
import Test exposing (..)
import Main exposing (..)


suite : Test
suite =
    describe "Main Test Suite"
        [ describe "update"
            [ it "returns new step" <|
                expect (update (StepChange 2) (Model 0 1)) to equal ( Model 0 2, step 2 )
            , it "returns increased value" <|
                expect (update Increase (Model 0 1)) to equal ( Model 1 1, value 1 )
            , it "returns model and command that increases in a sec" <|
                expect (update IncreaseAsync (Model 0 1)) to equal ( Model 0 1, increaseInSec )
            , it "returns decreased value" <|
                expect (update Decrease (Model 1 1)) to equal ( Model 0 1, value 0 )
            , it "returns model and command that decreases in a sec" <|
                expect (update DecreaseAsync (Model 1 1)) to equal ( Model 1 1, decreaseInSec )
            ]
        ]
