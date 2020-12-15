describe('General Web Site', () => {
    it('When I press only the button calculate without any more shoud return warning message', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=MM%2FDD%2FYYYY&StartingTime=12%3A00&StartingTimeAMPM=AM&LeavingDate=MM%2FDD%2FYYYY&LeavingTime=12%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');     
        await expect(messageResponse).toHaveTextContaining('ERROR!');
    })  
})
