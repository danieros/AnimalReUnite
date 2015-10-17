<%@ Page Title="Home Page" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="RegisterPet.aspx.cs" Inherits="AnimalReUnite._Default" %>

<asp:Content ID="BodyContent" ContentPlaceHolderID="MainContent" runat="server">
    <label for="email">Let's identify your pet. The best way to fill in the information is imagine you describing your pet to a police artist and is making a sketch.</label>
    <div class="radio">
        <label>
            <input type="radio" name="optradio">Dog</label>
    </div>
    <div class="radio">
        <label>
            <input type="radio" name="optradio">Cat</label>
    </div>
    <div class="radio disabled">
        <label>
            <input type="radio" name="optradio">Bird</label>
    </div>
    <div class="form-group">
        <label for="petname">Name of pet:</label>
        <input type="email" class="form-control" id="email">
    </div>
    <div class="form-group">
        <label for="pwd">Breed:</label>
        <a href="DogBreedSelect.aspx">Select a breed</a>
    </div>
    <div class="checkbox">
        <label>
            <input type="checkbox">
            Remember me</label>
    </div>
    <div class="form-group">
        <label for="comment">Any distinct features:</label>
        <textarea class="form-control" rows="5" id="comment"></textarea>
    </div>
    <button type="submit" class="btn btn-default">Submit</button>


</asp:Content>
