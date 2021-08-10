import React, {useRef, useEffect} from 'react';
import GameService from '../../services/gameService';
import './canvasContainer.css';

const CanvasContainer = () => {

    const canvasRef = useRef(null);
  
    useEffect(() => {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext('2d');
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      GameService.initializeGame(ctx);
      window.addEventListener('resize', () => {
      ctx.canvas.width = window.innerWidth;
      ctx.canvas.height = window.innerHeight;
      });
    }, [])

    return (
        // TODO: fix the width and height of the canvas without making the canvas blurry
        <canvas ref={canvasRef} className="canvas" width='100%' height='100%'></canvas>
    )
}

export default CanvasContainer;