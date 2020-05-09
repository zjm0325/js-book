function blizzardFan() {
    let isFan = true;
    let pharse = 'Warcraft';
    console.log('Before if: ' + pharse);
    if (isFan) {
        let pharse = 'initial text';
        pharse = 'For the Horde!';
        console.log('Inside if: ' + pharse);

    }
    pharse = 'For the Alliance!';
    console.log('After if: ' + pharse);


}

blizzardFan();