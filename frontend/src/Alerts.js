import React, { Component, Fragment } from 'react';
import { withAlert } from 'react-alert';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export class Alerts extends Component {



  componentDidUpdate(prevProps) {
    const { error, alert, message } = this.props;
    if (error !== prevProps.error) {
      if (error.msg.message) alert.error(`Message: ${error.msg.message.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.name) alert.error(`Name: ${error.msg.name.join()}`);
      if (error.msg.rate) alert.error(`Rate: ${error.msg.rate.join()}`);
      if (error.msg.symbol) alert.error(`Symbol: ${error.msg.symbol.join()}`);
      if (error.msg.id) alert.error(`ID: ${error.msg.id.join()}`);
      if (error.msg.account_type) alert.error(`Accouttype: ${error.msg.account_type.join()}`);
      if (error.msg.description) alert.error(`Description: ${error.msg.description.join()}`);
      if (error.msg.initial_balance) alert.error(`Initial Balance: ${error.msg.initial_balance.join()}`);
      if (error.msg.is_active) alert.error(`Is Active: ${error.msg.is_active.join()}`);
      if (error.msg.is_contra) alert.error(`Is Contra: ${error.msg.is_contra.join()}`);
      if (error.msg.order) alert.error(`Order: ${error.msg.order.join()}`);
      if (error.msg.memo) alert.error(`Memo: ${error.msg.memo.join()}`);
      if (error.msg.vendor) alert.error(`Vendor: ${error.msg.vendor.join()}`);
      if (error.msg.date) alert.error(`Date: ${error.msg.date.join()}`);
      if (error.msg.due) alert.error(`Due: ${error.msg.due.join()}`);
      if (error.msg.debit_account) alert.error(`Debit-Account: ${error.msg.debit_account.join()}`);
      if (error.msg.amount) alert.error(`Amount: ${error.msg.amount.join()}`);
      if (error.msg.reference) alert.error(`Reference: ${error.msg.reference.join()}`);
      if (error.msg.pricing_method) alert.error(`Pricing-Method: ${error.msg.pricing_method.join()}`);
      if (error.msg.direct_price) alert.error(`DirectPrice: ${error.msg.direct_price.join()}`);
      if (error.msg.margin) alert.error(`Margin: ${error.msg.margin.join()}`);
      if (error.msg.markup) alert.error(`Markup: ${error.msg.markup.join()}`);
      if (error.msg.sku) alert.error(`SKU: ${error.msg.sku.join()}`);
      if (error.msg.quantity) alert.error(`Quantity: ${error.msg.quantity.join()}`);
      if (error.msg.product) alert.error(`Product: ${error.msg.product.join()}`);
      if (error.msg.review_needed) alert.error(`Reviewed-Needed: ${error.msg.review_needed.join()}`);
      if (error.msg.category) alert.error(`Category: ${error.msg.category.join()}`);
      if (error.msg.location) alert.error(`Location: ${error.msg.location.join()}`);
      if (error.msg.updated) alert.error(`Updated: ${error.msg.updated.join()}`);
      if (error.msg.status) alert.error(`Status: ${error.msg.status.join()}`);
      if (error.msg.notes) alert.error(`NOTES: ${error.msg.notes.join()}`);
      if (error.msg.product_component) alert.error(`PRODUCT-COMPONENT: ${error.msg.product_component.join()}`);
      if (error.msg.minimum_order_level) alert.error(`MANIMUM-ORDER-LEVEL: ${error.msg.minimum_order_level.join()}`);
      if (error.msg.maximum_stock_level) alert.error(`MAXIMUM-STOCK-LEVEL: ${error.msg.maximum_stock_leve.join()}`);
      if (error.msg.lines) alert.error(`LINES: ${error.msg.lines.join()}`);
      if (error.msg.items) alert.error(`ITEMS: ${error.msg.items.join()}`);
      if (error.msg.customer) alert.error(`CUSTOMER: ${error.msg.customer.join()}`);
      if (error.msg.purchase_order_number) alert.error(`PURCHASE-ORDER-NUMBER: ${error.msg.purchase_order_number.join()}`);
      if (error.msg.validated_by) alert.error(`INVOICE-VALIDATOR: ${error.msg.validated_by.join()}`);
      if (error.msg.draft) alert.error(`Draft: ${error.msg.draft.join()}`);
      if (error.msg.cashier) alert.error(`SALES PERSON: ${error.msg.cashier.join()}`);
      if (error.msg.terms) alert.error(`TERMS: ${error.msg.terms.join()}`);
      if (error.msg.comments) alert.error(`COMMENTS: ${error.msg.comments.join()}`);
      if (error.msg.ship_from) alert.error(`SHIP FROM: ${error.msg.ship_from.join()}`);
      if (error.msg.validated_by) alert.error(`VALIDATED BY: ${error.msg.validated_by.join()}`);
      if (error.msg.expected_receipt_date) alert.error(`EXPECTED DATE: ${error.msg.expected_receipt_date.join()}`);
      if (error.msg.supplier) alert.error(`SUPPLIER: ${error.msg.supplier.join()}`);
      if (error.msg.entries) alert.error(`ENTRIES: ${error.msg.entries.join()}`);
      if (error.msg.shipping_cost_entries) alert.error(`SHIPPING ENTRIES: ${error.msg.shipping_cost_entries.join()}`);
      if (error.msg.ship_to) alert.error(`SHIP TO: ${error.msg.ship_to.join()}`);
      // if (error.msg.notes) alert.error(`NOTES: ${error.msg.notes.join()}`);
      if (error.msg.issuing_inventory_controller) alert.error(`STAFF: ${error.msg.issuing_inventory_controller.join()}`);
      if (error.msg.tax) alert.error(`TAX: ${error.msg.tax.join()}`);
      if (error.msg.type) alert.error(`TYPE: ${error.msg.type.join()}`);
      if (error.msg.unit) alert.error(`UNIT: ${error.msg.unit.join()}`);
      if (error.msg.finished_goods) alert.error(`FINISHED GOODS: ${error.msg.finished_goods.join()}`);
      if (error.msg.inventory_product) alert.error(`INVENTORY PRODUCT: ${error.msg.inventory_product.join()}`);
      if (error.msg.product_list) alert.error(`PRODUCT LIST: ${error.msg.product_list.join()}`);
      if (error.msg.klass) alert.error(`STUDENT CLASS: ${error.msg.klass.join()}`);
      if (error.msg.date) alert.error(`DATE: ${error.msg.date.join()}`);
      if (error.msg.recorded_by) alert.error(`DATE: ${error.msg.recorded_by.join()}`);
      if (error.msg.non_field_errors) alert.error(error.msg.non_field_errors.join());
      if (error.msg.title) alert.error(`TITLE: ${error.msg.title.join()}`);
      if (error.msg.author) alert.error(`AUTHOR: ${error.msg.author.join()}`);
      if (error.msg.publisher) alert.error(`PUBLISHER: ${error.msg.publisher.join()}`);
      if (error.msg.date_published) alert.error(`DATE PUBLISHED: ${error.msg.date_published.join()}`);
      if (error.msg.content) alert.error(`CONTENT: ${error.msg.content.join()}`);
      if (error.msg.created) alert.error(`CREATED: ${error.msg.created.join()}`);
      if (error.msg.approval_status) alert.error(`APPROVAL STATUS: ${error.msg.approval_status.join()}`);
      if (error.msg.file) alert.error(`FILE: ${error.msg.file.join()}`);
      if (error.msg.course) alert.error(`COURSES: ${error.msg.course.join()}`);
      if (error.msg.rating) alert.error(`RATING: ${error.msg.rating.join()}`);
      if (error.msg.curriculum) alert.error(`CURRICULUM: ${error.msg.curriculum.join()}`);
      if (error.msg.subject_code) alert.error(`SUBJECT CODE: ${error.msg.subject_code.join()}`);
      if (error.msg.code) alert.error(`CODE: ${error.msg.code.join()}`);
      if (error.msg.subject_teacher) alert.error(`SUBJECT TEACHER: ${error.msg.subject_teacher.join()}`);
      if (error.msg.subject) alert.error(`SUBJECT: ${error.msg.subject.join()}`);
      if (error.msg.application_date) alert.error(`APPLICATION DATE: ${error.msg.application_date.join()}`);
      if (error.msg.score) alert.error(`SCORE: ${error.msg.score.join()}`);
      if (error.msg.totalmarks) alert.error(`TOTAL MARKS: ${error.msg.totalmarks.join()}`);
      if (error.msg.stream) alert.error(`STREAM: ${error.msg.stream.join()}`);
      if (error.msg.max_population) alert.error(`MAX POPULATION: ${error.msg.max_population.join()}`);
      if (error.msg.population) alert.error(`POPULATION: ${error.msg.population.join()}`);
      if (error.msg.class_teacher) alert.error(`CLASS TEACHER: ${error.msg.class_teacher.join()}`);
      if (error.msg.year) alert.error(`YEAR: ${error.msg.year.join()}`);
      if (error.msg.enr_klass) alert.error(`ENROLLED CLASS: ${error.msg.enr_klass.join()}`);
      if (error.msg.first_name) alert.error(`FULL NAME: ${error.msg.first_name.join()}`);
      if (error.msg.middle_name) alert.error(`MIDDLE NAME: ${error.msg.middle_name.join()}`);
      if (error.msg.last_name) alert.error(`LAST YEAR: ${error.msg.last_name.join()}`);
      if (error.msg.guardian) alert.error(`GUARDIAN: ${error.msg.guardian.join()}`);
      if (error.msg.gender) alert.error(`GENDER: ${error.msg.gender.join()}`);
      if (error.msg.phone_number) alert.error(`PHONE NUMBER: ${error.msg.phone_number.join()}`);
      if (error.msg.whatsapp_number) alert.error(`WHATSAPP NUMBER: ${error.msg.whatsapp_number.join()}`);
      if (error.msg.gender) alert.error(`GENDER: ${error.msg.gender.join()}`);
      if (error.msg.email) alert.error(`EMAIL: ${error.msg.email.join()}`);
      if (error.msg.username) alert.error(`USERNAME: ${error.msg.username.join()}`);
      if (error.msg.school) alert.error(`SCHOOL: ${error.msg.school.join()}`);
      if (error.msg.date_of_birth) alert.error(`DATE OF BIRTH: ${error.msg.date_of_birth.join()}`);
      if (error.msg.attendancerecords) alert.error(`ATTENDANCE RECORDS: ${error.msg.attendancerecords.join()}`);
      if (error.msg.profile) alert.error(`PROFILE: ${error.msg.profile.join()}`);
      if (error.msg.address_one) alert.error(`ADDRESS ONE: ${error.msg.address_one.join()}`);
      if (error.msg.address_two) alert.error(`ADDRESS TWO: ${error.msg.address_two.join()}`);
      if (error.msg.street_line1) alert.error(`STREET LINE ONE: ${error.msg.street_line1.join()}`);
      if (error.msg.street_line2) alert.error(`STREET LINE TWO: ${error.msg.street_line2.join()}`);
      if (error.msg.city) alert.error(`CITY: ${error.msg.city.join()}`);
      if (error.msg.postcode) alert.error(`CITY: ${error.msg.postcode.join()}`);
      if (error.msg.fax_number) alert.error(`FAX NUMBER: ${error.msg.fax_number.join()}`);
      if (error.msg.contact_person) alert.error(`CONTACT PERSON: ${error.msg.contact_person.join()}`);
      if (error.msg.notes) alert.error(`NOTES: ${error.msg.notes.join()}`);
      if (error.msg.input_method) alert.error(`INPUT METHOD: ${error.msg.input_method.join()}`);
      if (error.msg.serial_port) alert.error(`SERIAL PORT: ${error.msg.serial_port.join()}`);
      if (error.msg.network_socket_address) alert.error(`SOCKET ADDRESS: ${error.msg.network_socket_address.join()}`);
      if (error.msg.network_socket_port) alert.error(`SOCKET PORT: ${error.msg.network_socket_port.join()}`);
      if (error.msg.process_sleep) alert.error(`PROCESS SLEEP: ${error.msg.process_sleep.join()}`);
      if (error.msg.baudrate) alert.error(`BAUDRATE: ${error.msg.baudrate.join()}`);
    }





    if (message !== prevProps.message) {
      if (message.addHaulier) alert.success(message.addHaulier);
      if (message.addCustomer) alert.success(message.addCustomer);
      if (message.addProduct) alert.success(message.addProduct);
    }
  }

  render() {
    return <Fragment />;
  }
}

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

export default connect(mapStateToProps)(withAlert()(Alerts));
