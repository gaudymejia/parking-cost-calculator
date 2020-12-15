describe('Payment With Dates', () => {
    it('For Short Term Parking for 4 days of parking', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Short&StartingDate=12%2F16%2F2020&StartingTime=12%3A00&StartingTimeAMPM=AM&LeavingDate=12%2F20%2F2020&LeavingTime=16%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        const messageResponse = $('<b>');  
        await expect(messageResponse).toHaveTextContaining('$ 120.00');
    });
})