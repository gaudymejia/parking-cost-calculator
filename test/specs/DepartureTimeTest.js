describe('Date Time', () => {
    it('should have departure time is less than entry time on the same day', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=12%2F1%2F2020&StartingTime=15%3A00&StartingTimeAMPM=AM&LeavingDate=12%2F1%2F2020&LeavingTime=07%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');     
        await expect(messageResponse).toHaveTextContaining('ERROR!');
    })

    it('should have an hour leaving greater than departure time', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=12%2F6%2F2020&StartingTime=23%3A00&StartingTimeAMPM=PM&LeavingDate=12%2F7%2F2020&LeavingTime=01%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');     
        await expect(messageResponse).toHaveTextContaining('ERROR!');
    })
})