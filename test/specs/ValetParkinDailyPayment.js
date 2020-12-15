describe('When I need to pay one day of parking', () => {
    it('should have 18 $', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=12%2F1%2F2020&StartingTime=12%3A00&StartingTimeAMPM=AM&LeavingDate=12%2F2%2F2020&LeavingTime=12%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');     
        await expect(messageResponse).toHaveText('$ 18.00');
    })
})

