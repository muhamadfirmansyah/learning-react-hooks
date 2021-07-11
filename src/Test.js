import React from 'react'

class Test extends React.Component
{
    state = {
        angka: 0
    }

    add = () => {
        this.setState({
            angka: this.state.angka + 1
        })
    }

    kurang = () => {
        this.setState({
            angka: this.state.angka - 1
        })
    }

    render() {
        return (
            <div>
                <h1>{ this.state.angka }</h1>

                <button onClick={ this.add }>Tambah</button>
                <button onClick={ this.kurang }>Kurang</button>
            </div>
        )
    }
}

export default Test;