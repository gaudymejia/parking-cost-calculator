describe('For Valet Parking leaving date is before my starting date or time', () => {
    it('should have a message when my leaving date is before my starting date or time', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=12%2F1%2F2020&StartingTime=15%3A00&StartingTimeAMPM=AM&LeavingDate=11%2F1%2F2020&LeavingTime=07%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');  
        await expect(messageResponse).toHaveTextContaining('ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME');
    });

})

describe('When my departure time is less than my entry time on the same day', () => {
    it('should have an error message', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=12%2F1%2F2020&StartingTime=15%3A00&StartingTimeAMPM=AM&LeavingDate=12%2F1%2F2020&LeavingTime=07%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');     
        await expect(messageResponse).toHaveText('ERROR!');
    })
})