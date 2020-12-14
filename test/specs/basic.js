describe('Parking Cost Calculator', () => {
    it('should have the right title', async () => {
        await browser.url('http://www.shino.de/parkcalc/')
        await expect(browser).toHaveTitle('Parking Cost Calculator"');
        console.log(browser.toHaveTitle());
    })
})

describe('My leaving date is before my starting date or time', () => {
    it('should have the right title', async () => {
        await browser.url('http://www.shino.de/parkcalc/index.php?ParkingLot=Valet&StartingDate=12%2F10%2F2020&StartingTime=12%3A00&StartingTimeAMPM=PM&LeavingDate=12%2F1%2F2020&LeavingTime=12%3A00&LeavingTimeAMPM=AM&action=calculate&Submit=Calculate')
        await expect(browser).toHaveTitle('ERROR! YOUR LEAVING DATE OR TIME IS BEFORE YOUR STARTING DATE OR TIME');
    })
})