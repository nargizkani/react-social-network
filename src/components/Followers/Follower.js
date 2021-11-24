import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './Follower.css';

export default function Follower() {
    const { follower } = useParams();
    const [chosenFollower, setChosenFollower] = useState(null);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const followers = [
            {
                name: 'Daniel',
                age: 21,
                image: "https://cultivatedculture.com/wp-content/uploads/2019/12/LinkedIn-Profile-Picture-Example-Tynan-Allan.jpeg",
                country: 'Switzerland'
            },
            {
                name: 'Alex',
                age: 50,
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXKOA2YqrEWWyGpKZzwqWuStJRCgeW1V0AOzDcAa5BZ4nRBSJPA9g4B7r0Ts6aa0s4gj8&usqp=CAU",
                country: 'USA'
            },
            {
                name: 'Paige',
                age: 25,
                image: "https://i.insider.com/59b6c4bfba785e36f932a317?width=600&format=jpeg&auto=webp",
                country: 'United Kingdom'
            },
            {
                name: 'Bethany',
                age: 25,
                image: "https://image.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg",
                country: 'Canada'
            },
        ];
        const foundFriend = followers.find((person) => person.name === follower);
        if (foundFriend) {
            setChosenFollower(foundFriend);
            setErrorMessage('');
        } else {
            setErrorMessage('You dont have such friend at the moment in your follower list');
        }
    }, [follower]);

    if (errorMessage) {
        return (
            <div class="alert alert-danger" role="alert">
                {errorMessage}
            </div>
        )
    }

    if (!chosenFollower) {
        return (
            <h1>
                Choose your follower
            </h1>
        )
    }

    return (
        <div class="card">
            <img src={chosenFollower.image} class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title"><strong>{chosenFollower.name}</strong></h5>
                <p class="card-text">
                    <strong>Age</strong>: {chosenFollower.age}
                    <br />
                    <strong>Country</strong>: {chosenFollower.country}
                </p>
            </div>
        </div>
    )
}