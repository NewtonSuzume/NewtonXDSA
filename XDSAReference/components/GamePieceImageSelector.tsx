import { XDSAGamePiece } from "@8592/config_utils/src/config_types";
import { Image } from 'expo-image';

export function GamePieceImageSelector(piece: XDSAGamePiece) {

    return (
        <Image source="https://picsum.photos/seed/696/3000/2000"/>
    )

}