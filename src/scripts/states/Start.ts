module OPENSets.State {
  export class Start extends Phaser.State {
    startGame(): void {
      if (this.game.input.activePointer.isMouse && this.game.input.activePointer.button !== Phaser.Mouse.LEFT_BUTTON) {
        return;
      }

      this.game.state.start('mainGame');
    }

    create(): void {
      let logo: Phaser.Sprite = this.game.add.sprite(this.game.world.centerX, 30, 'sets-logo');
      logo.anchor.setTo(0.5, 0);

      this.game.add.text(
        this.game.world.centerX - 85,
        this.game.world.centerY - 100,
        'Парови',
        { fill: 'white', fontSize: '48px' });

      let startButton: Phaser.Button = this.game.add.button(
        this.game.world.centerX,
        this.game.world.centerY + 190,
        'play-button',
        this.startGame,
        this,
        0, // over frame
        1, // normal frame
        2); // click frame

      startButton.anchor.setTo(0.5, 0);
    }
  }
}
