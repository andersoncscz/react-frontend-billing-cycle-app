import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getList, showUpdateTab, showDeleteTab } from '../redux/actions';

class BillingCycleList extends Component {

    componentWillMount() {
        this.props.getList();
    }


    renderRows(){
        const { list } = this.props || [];
        const { showUpdateTab, showDeleteTab } = this.props;
        return list.map(bc => (
            <tr key={bc._id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => showUpdateTab(bc)}>
                        <i className='fa fa-pencil'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => showDeleteTab(bc)}>
                        <i className='fa fa-trash-o'></i>
                    </button>                    
                </td>
            </tr>
        ))
    }


    render() {
        
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Mês</th>
                            <th>Ano</th>
                            <th className='table-actions'>Ações</th>
                        </tr>                        
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    list: state.billingCycle.list
})

const mapDispatchToProps = {
    getList,
    showUpdateTab,
    showDeleteTab
}

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleList);