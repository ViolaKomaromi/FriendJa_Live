import React from 'react';
//import image1 from './image1.jpeg';
import Navbar from '../MainNav/Navbar';

const MailBox = () => {
  return (
    <div className='container'>
      <div className='mail-box'>
        <aside className='sm-side'>
          <div className='user-head'>
            <a className='inbox-avatar' href='/'>
              {/* <img src={image1} alt='Angela Merkel' /> */}
              <img
                width='64'
                hieght='60'
                src='https://i.redd.it/h8eh7snph1uz.jpg'
                alt='Angela Merkel'
              />
            </a>
            <div className='user-name'>
              <h5>
                <a href='/'>Adriana Campos</a>
              </h5>
              <span>
                <a href='/'>adriana.campos@Gmail.com</a>
              </span>
            </div>
            <a className='mail-dropdown pull-right' href='/'>
              <i className='fa fa-chevron-down'></i>
            </a>
          </div>
          <div className='inbox-body'>
            <a
              href='/myModal'
              data-toggle='modal'
              title='Compose'
              className='btn btn-compose'
            >
              Compose
            </a>

            <div
              aria-hidden='true'
              aria-labelledby='myModalLabel'
              role='dialog'
              tabindex='-1'
              id='myModal'
              className='modal fade'
              // style='display: none;'
            >
              <div className='modal-dialog'>
                <div className='modal-content'>
                  <div className='modal-header'>
                    <button
                      aria-hidden='true'
                      data-dismiss='modal'
                      className='close'
                      type='button'
                    >
                      ×
                    </button>
                    <h4 className='modal-title'>Compose</h4>
                  </div>
                  <div className='modal-body'>
                    <form clas='form' className='form-horizontal'>
                      <div className='form-group'>
                        <label className='col-lg-2 control-label'>To</label>
                        <div className='col-lg-10'>
                          <input
                            type='text'
                            placeholder=''
                            id='inputEmail1'
                            className='form-control'
                          />
                        </div>
                      </div>
                      <div className='form-group'>
                        <label className='col-lg-2 control-label'>
                          Cc / Bcc
                        </label>
                        <div className='col-lg-10'>
                          <input
                            type='text'
                            placeholder=''
                            id='cc'
                            className='form-control'
                          />
                        </div>
                      </div>
                      <div className='form-group'>
                        <label className='col-lg-2 control-label'>
                          Subject
                        </label>
                        <div className='col-lg-10'>
                          <input
                            type='text'
                            placeholder=''
                            id='inputPassword1'
                            className='form-control'
                          />
                        </div>
                      </div>
                      <div className='form-group'>
                        <label className='col-lg-2 control-label'>
                          Message
                        </label>
                        <div className='col-lg-10'>
                          <textarea
                            rows='10'
                            cols='30'
                            className='form-control'
                            id=''
                            name=''
                          ></textarea>
                        </div>
                      </div>

                      <div className='form-group'>
                        <div className='col-lg-offset-2 col-lg-10'>
                          <span className='btn green fileinput-button'>
                            <i className='fa fa-plus fa fa-white'></i>
                            <span>Attachment</span>
                            <input type='file' name='files[]' multiple='' />
                          </span>
                          <button className='btn btn-send' type='submit'>
                            Send
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ul className='inbox-nav inbox-divider'>
            <li className='active'>
              <a href='/'>
                <i className='fa fa-inbox'></i> Inbox{' '}
                <span className='label label-danger pull-right'>2</span>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa fa-envelope-o'></i> Sent Mail
              </a>
            </li>
            <li>
              <a href='/'>
                <i className='fa fa-bookmark-o'></i> Important
              </a>
            </li>
            <li>
              <a href='/'>
                <i className=' fa fa-external-link'></i> Drafts{' '}
                <span className='label label-info pull-right'>30</span>
              </a>
            </li>
            <li>
              <a href='/'>
                <i className=' fa fa-trash-o'></i> Trash
              </a>
            </li>
          </ul>

          <div className='inbox-body text-center'>
            <div className='btn-group'>
              <a className='btn mini btn-primary'>
                <i className='fa fa-plus'></i>
              </a>
            </div>
            <div className='btn-group'>
              <a className='btn mini btn-success' href='/'>
                <i className='fa fa-phone'></i>
              </a>
            </div>
            <div className='btn-group'>
              <a className='btn mini btn-info' href='/'>
                <i className='fa fa-cog'></i>
              </a>
            </div>
          </div>
        </aside>
        <aside className='lg-side'>
          <div className='inbox-head'>
            <h5 className='inbox-title'>Inbox</h5>
            <form action='/' className='pull-right position'>
              <div className='input-append'>
                <input
                  type='text'
                  className='sr-input'
                  placeholder='Search Mail'
                />
                <button className='btn sr-btn' type='button'>
                  <i className='fa fa-search'></i>
                </button>
              </div>
            </form>
          </div>
          <div className='inbox-body'>
            <div className='mail-option'>
              <div className='chk-all'>
                <input
                  type='checkbox'
                  className='mail-checkbox mail-group-checkbox'
                />
                <div className='btn-group'>
                  <a
                    data-toggle='dropdown'
                    href='/'
                    className='btn mini all'
                    aria-expanded='false'
                  >
                    All
                    <i className='fa fa-angle-down '></i>
                  </a>
                  <ul className='dropdown-menu'>
                    <li>
                      <a href='/'> None</a>
                    </li>
                    <li>
                      <a href='/'> Read</a>
                    </li>
                    <li>
                      <a href='/'> Unread</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='btn-group'>
                <a
                  data-original-title='Refresh'
                  data-placement='top'
                  data-toggle='dropdown'
                  href='/'
                  className='btn mini tooltips'
                >
                  <i className=' fa fa-refresh'></i>
                </a>
              </div>
              <div className='btn-group hidden-phone'>
                <a
                  data-toggle='dropdown'
                  href='/'
                  className='btn mini blue'
                  aria-expanded='false'
                >
                  More
                  <i className='fa fa-angle-down '></i>
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a href='/'>
                      <i className='fa fa-pencil'></i> Mark as Read
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <i className='fa fa-ban'></i> Spam
                    </a>
                  </li>
                  <li className='divider'></li>
                  <li>
                    <a href='/'>
                      <i className='fa fa-trash-o'></i> Delete
                    </a>
                  </li>
                </ul>
              </div>
              <div className='btn-group'>
                <a data-toggle='dropdown' href='/' className='btn mini blue'>
                  Move to
                  <i className='fa fa-angle-down '></i>
                </a>
                <ul className='dropdown-menu'>
                  <li>
                    <a href='/'>
                      <i className='fa fa-pencil'></i> Mark as Read
                    </a>
                  </li>
                  <li>
                    <a href='/'>
                      <i className='fa fa-ban'></i> Spam
                    </a>
                  </li>
                  <li className='divider'></li>
                  <li>
                    <a href='/'>
                      <i className='fa fa-trash-o'></i> Delete
                    </a>
                  </li>
                </ul>
              </div>

              <ul className='unstyled inbox-pagination'>
                <li>
                  <span>1-50 of 234</span>
                </li>
                <li>
                  <a className='np-btn' href='/'>
                    <i className='fa fa-angle-left  pagination-left'></i>
                  </a>
                </li>
                <li>
                  <a className='np-btn' href='/'>
                    <i className='fa fa-angle-right pagination-right'></i>
                  </a>
                </li>
              </ul>
            </div>
            <table className='table table-inbox table-hover'>
              <tbody>
                <tr className='unread'>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message  dont-show'>FriendJa</td>
                  <td className='view-message '>We have found a new match</td>
                  <td className='view-message  inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message  text-right'>9:27 AM</td>
                </tr>
                <tr className='unread'>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa </td>
                  <td className='view-message'>We have found a new match</td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>March 15</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa</td>
                  <td className='view-message'>We have found a new match </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>March 15</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa</td>
                  <td className='view-message'>We have found a new match</td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>April 01</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td>
                  <td className='view-message dont-show'>
                    FriendJa{' '}
                    <span className='label label-danger pull-right'></span>
                  </td>
                  <td className='view-message'>We have found a new match </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>May 23</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa </td>
                  <td className='view-message'>We have found a new match</td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>March 14</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa</td>
                  <td className='view-message'>We have found a new match</td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>Feb 19</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>
                    FriendJa
                    <span className='label label-success pull-right'></span>
                  </td>
                  <td className='view-message view-message'>
                    We have found a new match
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>March 04</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa</td>
                  <td className='view-message view-message'>
                    We have found a new match{' '}
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>June 13</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>
                    FriendJa{' '}
                    <span className='label label-info pull-right'></span>
                  </td>
                  <td className='view-message view-message'>
                    We have found a new match
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>March 24</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa</td>
                  <td className='view-message'>We have found a new match</td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>March 09</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td>
                  <td className='dont-show'>FriendJa </td>
                  <td className='view-message'>We have found a new match</td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>May 14</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa </td>
                  <td className='view-message'>We have found a new match </td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>February 25</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='dont-show'>FriendJa</td>
                  <td className='view-message view-message'>
                    We have found a new match
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>March 14</td>
                </tr>
                {/* <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>Twitter</td>
                  <td className='view-message'>
                    Your Twitter password has been changed
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>April 07</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>
                    InternetSeer Website Monitoring
                  </td>
                  <td className='view-message'>
                    http://golddesigner.org/ Performance Report
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>July 14</td>
                </tr> */}
                {/* <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td>
                  <td className='view-message dont-show'>AddMe.com</td>
                  <td className='view-message'>
                    Submit Your Website to the AddMe Business Directory
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>August 10</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>Terri Rexer, S P N</td>
                  <td className='view-message view-message'>
                    Forget Google AdWords: Un-Limited Clicks fo
                  </td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>April 14</td>
                </tr> */}
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>FriendJa </td>
                  <td className='view-message'>Welcome to FriendJa</td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>June 16</td>
                </tr>
                <tr className=''>
                  {/* <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td> */}
                  {/* <td className='inbox-small-cells'>
                    <i className='fa fa-star inbox-started'></i>
                  </td> */}
                  {/* <td className='view-message dont-show'>Laura Gaffin, S P N </td>
                  <td className='view-message'>
                    Your Website On Google (Higher Rankings Are Better)
                  </td>
                  <td className='view-message inbox-small-cells'></td>
                  <td className='view-message text-right'>August 10</td>
                </tr>
                <tr className=''>
                  <td className='inbox-small-cells'>
                    <input type='checkbox' className='mail-checkbox' />
                  </td>
                  <td className='inbox-small-cells'>
                    <i className='fa fa-star'></i>
                  </td>
                  <td className='view-message dont-show'>Facebook</td>
                  <td className='view-message view-message'>
                    Alireza Zare Login faild
                  </td>
                  <td className='view-message inbox-small-cells'>
                    <i className='fa fa-paperclip'></i>
                  </td>
                  <td className='view-message text-right'>feb 14</td> */}
                </tr>
              </tbody>
            </table>
          </div>
        </aside>
      </div>
      <Navbar />
    </div>
  );
};

export default MailBox;
