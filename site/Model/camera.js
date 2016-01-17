var Camera = {
	worldXOffset: 0,
	worldYOffset: 0,
	heroXOffset: 0,
	heroYOffset: 0,
	saveZone: 4,
	move: {
		right: false,
		left: false,
		up: false,
		down: false,
	},
	update: function (speedX, speedY) {
	
		if ((this.heroXOffset + speedX >= 0) && (World.map.width > this.heroXOffset + speedX)) {
			this.heroXOffset += speedX;
		};

		if ((this.heroYOffset + speedY >= 0) && (World.map.height >= this.heroYOffset + speedY)) {
			this.heroYOffset += speedY;
		};
		/**
		* der er 2 af hvær for at sige: når man hopper over fra mindre skærm til støre skærm at den rykker, men ikke den anden vej. så det giver en offsæt hver gang
		*/
		if (speedX == 1 &&  (((Window.REAL_WIDTH/Tile.SIZE) / 2) < this.heroXOffset) && (World.map.width - (Window.REAL_WIDTH/Tile.SIZE) / 2) >= this.heroXOffset) { 
			this.worldXOffset += speedX;
		};
		if (speedX == -1 && (((Window.REAL_WIDTH/Tile.SIZE) / 2) <= this.heroXOffset) && (World.map.width - (Window.REAL_WIDTH/Tile.SIZE) / 2) > this.heroXOffset) { 
			this.worldXOffset += speedX;
		};

		if (speedY == 1 && ((Window.REAL_HEIGHT/Tile.SIZE) / 2 < this.heroYOffset) && (World.map.height - (Window.REAL_HEIGHT/Tile.SIZE) / 2) >= this.heroYOffset) {
			this.worldYOffset += speedY;
		};
		if (speedY == -1 && ((Window.REAL_HEIGHT/Tile.SIZE) / 2 <= this.heroYOffset) && (World.map.height - (Window.REAL_HEIGHT/Tile.SIZE) / 2) > this.heroYOffset) {
			this.worldYOffset += speedY;
		};
	},
	load: function () {
		//console.log("Camera Dpo......");
		var hafeWindowTileSizeWidth = Math.ceil((Window.REAL_WIDTH/Tile.SIZE) / 2 );
		var hafeWindowTileSizeheight = Math.ceil((Window.REAL_HEIGHT/Tile.SIZE) / 2 );
		if (hafeWindowTileSizeWidth >= this.heroXOffset) {
			this.worldXOffset = 0;
			//console.log("width under halv");
		}else if ((World.map.width - hafeWindowTileSizeWidth) <= this.heroXOffset) {
			this.worldXOffset = Math.floor(World.map.width - (hafeWindowTileSizeWidth*2));
			//console.log("width over halv");
		}else{
			this.worldXOffset = Math.floor(this.heroXOffset - hafeWindowTileSizeWidth);
			//console.log("width aldt andet");
		}

		if (hafeWindowTileSizeheight >= this.heroYOffset) {
			this.worldYOffset = 0;
			//console.log("height under halv");
		}else if ((World.map.height - hafeWindowTileSizeheight) <= this.heroYOffset) {
			this.worldYOffset = Math.floor(World.map.height - (Window.REAL_HEIGHT/Tile.SIZE));
			//console.log("height over halv");
		}else{
			this.worldYOffset = Math.floor(this.heroYOffset - hafeWindowTileSizeheight);
			//console.log("height aldt andet");
		}
		//console.log("this.worldXOffset" + this.worldXOffset + ": this.worldYOffset "+ this.worldYOffset);
		/*
		this.worldYOffset = Math.floor(this.heroYOffset - ((Window.REAL_HEIGHT/Tile.SIZE) / 2));
		this.worldXOffset = Math.floor(this.heroXOffset - ((Window.REAL_WIDTH/Tile.SIZE) / 2));
		*/
	}
}