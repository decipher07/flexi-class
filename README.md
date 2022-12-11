# FlexMoney Task

Deepankar Arun Jain

## Problem statement

Assume that you are the CTO for the outsourcing firm which has been chosen to build an
admission form for the Yoga Classes which happen every month.
Requirements for the admission form are:

- Only people within the age limit of 18-65 can enroll for the monthly classes and they will
be paying the fees on a month on month basis. I.e. an individual will have to pay the fees
every month and he can pay it any time of the month.
- They can enroll any day but they will have to pay for the entire month. The monthly fee is
500/- Rs INR.
- There are a total of 4 batches a day namely 6-7AM, 7-8AM, 8-9AM and 5-6PM. The
participants can choose any batch in a month and can move to any other batch next
month. I.e. participants can shift from one batch to another in different months but in
same month they need to be in same batch

## Entity Diagram

The problem statement, involved emphasing on the fact of a user and payment model with respect to the batch chosen by the User. The backend architecture involved making separate collections for User, Batch and Payments for the simple reason to scale according to the situation. Furthermore, Backend architecture involves a clean architecture along with using typescript and proper commenting for understanding the code.. The same can availed from the postman documentation [here](https://documenter.getpostman.com/view/10696212/2s8YzTThY2) 

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled.png)

The above schema illustrates a one to many relationship amongst an User and the Payment Schema. The User can issue multiple payments for **different months** and hence a one to many relation has been shown. Similarly, For a particular payment document, There might be multiple batch timings amongst different month and therefore a One to Many Schema has been followed. 

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%201.png)

Thought about? A user can be enrolled in one to one relationship with Batch, ie a user can be enrolled only in a particular batch. 

The reason I chose not to connect User and Batch with one to one relationship was to avoid complexity in including the batch time the user has supposed to be at. Eventually, a different table storing batchid and userid can be maintained signifying a particular user and the batch for a particular month. So a different outlook for this will look like below: 

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%202.png)

## Frontend

## Initial Page

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%203.png)

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%204.png)

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%205.png)

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%206.png)

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%207.png)

![Untitled](docs/FlexMoney%20Task%20c88f18790d134f10823e0ecc4715bb54/Untitled%208.png)

## Final Deployments and URLs

Frontend : [http://3.109.139.40:5173/login](http://3.109.139.40:5173/login)

Backend: [http://3.109.139.40:3000/l](http://3.109.139.40:5173/login)

Github Url: [https://github.com/decipher07/flexi-class](https://github.com/decipher07/flexi-class)

## Tech Stacks used

Frontend : React, Bootstrap, CSS

Backend: Node, Typescript, Postgresql, Express, Docker, AWS

## Note

I’m hosting my complete project on AWS free tier, though I’ve already exhausted my free credits and running out credits at the moment. I’ll be shutting down in EC2 after 10 days ie 21/12/2022.

## Message for the Flex Money Team

Hey Team,

It was really an amazing experience working on the problem statement. The task was new to me from every aspect of my coding experience. I actually learnt a lot about implementation of these system in the architecture. I’ll really hope to have a next round of discussion on my work and discuss to make it more robust. Your feedbacks will surely be appreciated. 

Thank You,
Deepankar